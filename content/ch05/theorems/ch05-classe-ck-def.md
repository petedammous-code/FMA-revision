---
id: ch05-classe-ck-def
type: definition
chapter: 5
title: Applications de classe $C^k$ et $C^\infty$ (définition par récurrence)
ref: non numéroté, section V.5.1, p. 106
page: 106
importance: 2
depends: [ch05-differentielle-def, ch05-lef-banach-norme-algebre, ch05-differentiable-implique-continue]
tags: [classe-ck, differentielles-successives, regularite, definition]
---
## Intuition

> 💡 La différentielle $df$ d'une application $f:U\to F$ est elle-même une application, $x\mapsto df_x$, à valeurs dans l'evn $\mathcal L(E;F)$. On peut donc se demander si **elle** est continue, différentiable, etc. Être de classe $C^k$, c'est pouvoir différentier $k$ fois de suite, la dernière différentielle obtenue étant continue.

En variable réelle, $C^k$ signifie « $k$ fois dérivable, de dérivée $k$-ième continue ». Ici chaque différentiation fait monter d'un étage : $df_x\in\mathcal L(E;F)$, $d(df)_x\in\mathcal L(E;\mathcal L(E;F))$, etc. Ce qui rend la définition possible, c'est que chacun de ces espaces est un **espace vectoriel normé** (norme d'opérateur, [[ch05-lef-banach-norme-algebre]]) : la notion de différentiabilité ([[ch05-differentielle-def]]) s'applique à chaque étage.

Rappel : $\mathcal L(E;F)$ est l'espace des applications linéaires continues de $E$ dans $F$, muni de $\|T\|=\sup_{\|h\|_E\le1}\|T(h)\|_F$ ([[ch05-norme-operateur-def]]).

## Énoncé

**Définition (poly, section V.5.1, p. 106, non numérotée).** Soient $E$ et $F$ des espaces vectoriels normés et $U$ un ouvert de $E$. On définit, pour une application $f:U\to F$, le fait d'être de classe $C^k$, $k\in\N\cup\{\infty\}$, par récurrence.

* **Classe $C^0$** : $f$ est continue.
* **Classe $C^1$** : $f$ est différentiable en tout point $x\in U$ et l'application
$$
df:U\to\mathcal L(E;F),\qquad x\mapsto df_x
$$
est continue.
* **Classe $C^k$**, $k\in\N\setminus\{0,1\}$ : $f$ est différentiable en tout point $x\in U$ et $df$ est de classe $C^{k-1}$.
* **Classe $C^\infty$** : $f$ est de classe $C^k$ pour tout $k\in\N$.

Les espaces $\mathcal L(E;F)$, $\mathcal L(E;\mathcal L(E;F))$, $\mathcal L(E;\mathcal L(E;\mathcal L(E;F)))$, etc., sont des espaces vectoriels normés. Ainsi les questions de continuité et de différentiabilité successive de $f$, $df$, $d(df)$, etc., rentrent bien dans le cadre de l'étude.

**Notation.** On note $d^2f=d(df)$, puis $d^kf=d(d^{k-1}f)$ : si $f$ est $C^k$, $d^kf$ est définie et continue sur $U$, à valeurs dans $\mathcal L(E;\mathcal L(E;\cdots\mathcal L(E;F)\cdots))$ ($k$ fois $\mathcal L(E;\cdot)$). Par récurrence immédiate sur la définition, **$f$ est $C^k$ ($k\ge1$) si et seulement si $f$ est différentiable et $df$ est $C^{k-1}$** (pour $k=1$ : « $df$ est $C^0$ » = « $df$ continue »).

## Hypothèses

### H1 — $U$ ouvert

**Rôle.** La différentiabilité en $x$ demande que $f$ soit définie sur une boule autour de $x$ (on compare $f(x+h)$ et $f(x)$ pour tout petit $h$). Pour différentier $df$, il faut de même que $df$ soit définie au voisinage de chaque point : d'où le travail sur un ouvert, où « différentiable en tout point » a un sens à chaque étage.

### H2 — les espaces itérés sont normés par la norme d'opérateur

**Rôle.** La continuité de $df$ et la différentiabilité de $df$ dépendent du choix de la norme sur $\mathcal L(E;F)$ quand $E$ est de dimension infinie. Le poly utilise toujours la norme d'opérateur. En dimension finie, toutes les normes sur $\mathcal L(E;F)$ sont équivalentes et la question ne se pose pas.

## Exemples

* **Linéaire continue.** Si $T\in\mathcal L(E;F)$, $dT_x=T$ pour tout $x$ ([[ch05-differentielle-lineaire]]) : $dT$ est constante, donc continue et différentiable de différentielle nulle. Ainsi $T$ est $C^\infty$, avec $d^2T=0$ ([[ch05-lineaire-c-infini]]).
* **Bilinéaire continue.** Si $b\in\mathcal L(E_1,E_2;F)$, $db_{(x,y)}(h,k)=b(h,y)+b(x,k)$ ([[ch05-differentielle-bilineaire]]). L'application $db:(x,y)\mapsto db_{(x,y)}$ est **linéaire** en $(x,y)$, et continue car $\|db_{(x,y)}\|\le\|b\|\,(\|x\|+\|y\|)$ (norme somme sur le produit). Elle est donc $C^\infty$ par l'exemple précédent, et $b$ est $C^\infty$ ; $d^2b$ est constante et $d^3b=0$.
* **Différentiable mais pas $C^1$.** $f:\R\to\R$, $f(x)=x^2\sin(1/x)$, $f(0)=0$. On a $f'(0)=\lim_{x\to0}x\sin(1/x)=0$ et $f'(x)=2x\sin(1/x)-\cos(1/x)$ pour $x\ne0$ ; $f'(1/(2k\pi))=-1$ ne tend pas vers $f'(0)=0$. Donc $f$ est différentiable sur $\R$ mais $df_x=f'(x)\,\cdot$ n'est pas continue en $0$ : $f$ n'est pas $C^1$.
* **$C^1$ mais pas $C^2$.** $f(x)=x|x|$ : $f'(x)=2|x|$ est continue, mais pas dérivable en $0$. Plus généralement $x\mapsto x^k|x|$ est $C^k$ et pas $C^{k+1}$.

## Pièges

* > ⚠️ « $C^k$ » est plus fort que « $k$ fois différentiable » : on exige en plus la continuité de la dernière différentielle (exemple $x^2\sin(1/x)$ ci-dessus pour $k=1$).
* $C^k\Rightarrow C^{k-1}$ : pour $k=1$, une application différentiable est continue ([[ch05-differentiable-implique-continue]]) ; puis, par récurrence, si $f$ est $C^k$ ($k\ge2$), $df$ est $C^{k-1}$ donc $C^{k-2}$ (hypothèse de récurrence), donc $f$ est $C^{k-1}$.
* $d^2f_x$ vit dans $\mathcal L(E;\mathcal L(E;F))$, pas dans $\mathcal L(E;F)$ ; on l'identifie à une application **bilinéaire** grâce à l'isométrie de [[ch05-isometrie-bilineaire-curryfication]] (voir [[ch05-differentielle-seconde-def]]).
* En dimension finie ($E=\R^n$, $F=\R^p$), $f$ est $C^k$ si et seulement si toutes les dérivées partielles des composantes d'ordre $\le k$ existent et sont continues sur $U$. Justification par récurrence sur $k$ : $f$ est $C^1$ ssi ses dérivées partielles existent et sont continues ([[ch05-c1-ssi-partielles-continues]]) ; dans ce cas $df_x$ a pour matrice $\big(\frac{\partial f_j}{\partial x_i}(x)\big)$ ([[ch05-matrice-jacobienne]]) et, l'application « matrice » étant un isomorphisme linéaire de $\mathcal L(\R^n;\R^p)$ sur $\R^{pn}$ (donc $C^\infty$ ainsi que son inverse), $df$ est $C^{k-1}$ ssi chaque $\frac{\partial f_j}{\partial x_i}$ l'est ([[ch05-differentiabilite-composantes]]).
