---
id: ch05-accroissements-finis
type: theorem
chapter: 5
title: Théorème des accroissements finis (TAF) dans les espaces vectoriels normés
ref: Théorème V.4.4
page: 104
importance: 3
depends: [ch05-accroissements-finis-borne, ch05-composition-differentielles, ch05-differentiable-implique-continue, ch05-derivee-variable-reelle, ch05-norme-operateur-def]
tags: [accroissements-finis, taf, inegalite, lipschitz, convexe, segment]
---
## Intuition

> 💡 Pour comparer $f(a)$ et $f(b)$, on **marche en ligne droite** de $a$ à $b$ et on regarde $f$ le long de ce trajet. À chaque pas, $f$ étire les petits déplacements d'un facteur au plus $\|df_x\|$ (la norme d'opérateur de la différentielle). Donc l'écart total $\|f(b)-f(a)\|$ est au plus « facteur d'étirement maximal le long du segment » $\times$ « longueur du segment ».

C'est l'outil n°1 pour **majorer** : il transforme une borne sur la différentielle en une borne lipschitzienne sur la fonction. Il ne donne qu'une inégalité (pas d'égalité $f(b)-f(a)=df_c(b-a)$ quand $F$ est de dimension $\ge2$), et il exige que le **segment** $[a,b]$ reste dans le domaine.

Notations : $U$ ouvert de l'e.v.n. $E$, $f:U\to F$ **différentiable** sur $U$ ([[ch05-differentielle-def]]) ; $df_x\in\mathcal L(E;F)$ et $\|df_x\|=\sup_{\|h\|_E\le1}\|df_x(h)\|_F$ est sa norme d'opérateur ([[ch05-norme-operateur-def]]). Un ouvert $U$ est **convexe** si pour tous $a,b\in U$, le segment $[a,b]$ est contenu dans $U$.

## Énoncé

**Théorème (poly, Théorème V.4.4, p. 104) — Théorème des accroissements finis.** Soient $E$ et $F$ des espaces vectoriels normés, $U$ un ouvert de $E$ et $f:U\to F$ une application différentiable sur $U$. Soient $a$ et $b$ des points de $U$. Si le segment $[a,b]=\{ta+(1-t)b\ ;\ t\in[0,1]\}$ est contenu dans $U$, alors
$$
\|f(b)-f(a)\|_F\le\sup_{t\in[0,1]}\big\|df_{ta+(1-t)b}\big\|\times\|b-a\|_E.
$$
En particulier, si $U$ est convexe, et que $\sup_{x\in U}\|df_x\|\le k$ pour une constante $k$, alors quels que soient $a$ et $b$ dans $U$,
$$
\|f(b)-f(a)\|_F\le k\,\|b-a\|_E.
$$
(Si le $\sup$ vaut $+\infty$, l'inégalité est triviale.)

## Hypothèses

### H1 — $f$ différentiable sur $U$ (au moins en chaque point du segment)

**Rôle.** La fonction $h(t)=f((1-t)a+tb)$ doit être continue sur $[0;1]$ et différentiable sur $]0;1[$ pour appliquer le Corollaire V.4.3 ; c'est la règle de composition qui le fournit, à partir de la différentiabilité de $f$ aux points du segment. Aucune hypothèse $C^1$ n'est nécessaire.

**Si on la retire.** Sur $U=E=\R$, $f=\mathbf 1_{]0;+\infty[}$ est différentiable sur $\R\setminus\{0\}$ avec $df_x=0$ ; le $\sup$ des $\|df_x\|$ là où elles existent est $0$, et pourtant $|f(1)-f(-1)|=1>0$. Un seul point de non-différentiabilité sur le segment (avec discontinuité) ruine la conclusion.

### H2 — Le segment $[a,b]$ est contenu dans $U$

**Rôle.** On restreint $f$ au chemin $t\mapsto(1-t)a+tb$ : il faut que ce chemin reste dans le domaine de $f$, et c'est sur lui seulement que l'on contrôle $\|df\|$.

**Si on la retire.** Soit $U=\{z\in\C\ ;\ \tfrac12<|z|<2\}\setminus\,]-\infty;0]$ (couronne fendue le long de l'axe réel négatif), vu comme ouvert de $\R^2$ euclidien, et $f=\mathrm{Arg}$, l'argument principal, à valeurs dans $]-\pi;\pi[$. En coordonnées polaires $f(re^{i\theta})=\theta$, et $df=\frac{-y\,dx+x\,dy}{x^2+y^2}$ a pour norme $\|df_z\|=\frac1{|z|}\le2$ sur $U$. Avec $a=-1+i\eps$, $b=-1-i\eps$ ($0<\eps<\tfrac12$) : $f(a)=\pi-\arctan\eps$, $f(b)=-(\pi-\arctan\eps)$, donc $|f(a)-f(b)|=2\pi-2\arctan\eps\ge2\pi-1$, alors que $2\|b-a\|=4\eps$ tend vers $0$. Le segment $[a,b]$ coupe la fente : il n'est pas dans $U$, et l'inégalité « $\le k\|b-a\|$ » est fausse. Cet ouvert $U$ est connexe mais **pas convexe**.

### H3 — Pour la seconde partie : $U$ convexe et $\sup_U\|df_x\|\le k$

**Rôle.** La convexité garantit H2 pour **tout** couple $(a,b)$ ; la borne sur $U$ majore le $\sup$ le long de n'importe quel segment.

**Si on la retire.** Même exemple que pour H2 : $\|df\|\le2$ sur $U$ non convexe, mais $f$ n'est pas $2$-lipschitzienne (elle n'est même pas uniformément continue sur $U$). Sur un ouvert connexe non convexe, on obtient seulement une majoration par $k$ fois la **longueur d'une ligne brisée** joignant $a$ à $b$ dans $U$ (appliquer le théorème à chaque segment).

### H4 — $E$, $F$ espaces vectoriels normés quelconques

**Rôle.** Aucune complétude n'est utilisée : la preuve repose sur le Théorème V.4.1, qui n'emploie que l'inégalité triangulaire.

**Si on la retire.** Rien à retirer ; à retenir : le TAF vaut dans **tout** e.v.n., contrairement à la formule intégrale [[ch05-theoreme-fondamental]] qui demande $F$ de Banach et $f$ de classe $C^1$.

## Idée de la preuve

Restreindre $f$ au segment : $h(t)=f((1-t)a+tb)$, fonction d'une variable réelle. La règle de la chaîne donne $h'(t)=df_{(1-t)a+tb}(b-a)$, donc $\|h'(t)\|\le\sup\|df\|\cdot\|b-a\|$, et le Corollaire V.4.3 conclut.

## Preuve

Posons $K=\sup_{t\in[0,1]}\|df_{ta+(1-t)b}\|\in[0;+\infty]$. Si $K=+\infty$, il n'y a rien à démontrer ; supposons $K<+\infty$.

*Le chemin.* Soit $\gamma:\R\to E$, $\gamma(t)=(1-t)a+tb=a+t(b-a)$. C'est une application affine continue, différentiable en tout point avec $d\gamma_t(s)=s(b-a)$, c'est-à-dire $\gamma'(t)=b-a$ (somme d'une constante et de l'application linéaire continue $t\mapsto t(b-a)$, [[ch05-differentielle-lineaire]]). L'ensemble $I=\gamma^{-1}(U)$ est un ouvert de $\R$ (image réciproque d'un ouvert par une application continue) qui contient $[0;1]$, puisque $\gamma([0;1])=[a,b]\subset U$. Notons que, quand $t$ décrit $[0;1]$, $\gamma(t)=(1-t)a+tb$ décrit exactement les points $sa+(1-s)b$, $s=1-t\in[0;1]$ : donc $K=\sup_{t\in[0;1]}\|df_{\gamma(t)}\|$.

*La fonction auxiliaire.* Posons $h=f\circ\gamma:I\to F$. Pour tout $t\in I$, $f$ est différentiable en $\gamma(t)\in U$ et $\gamma$ est différentiable en $t$, donc par la règle de composition ([[ch05-composition-differentielles]]) $h$ est différentiable en $t$, et
$$
h'(t)=dh_t(1)=df_{\gamma(t)}\big(d\gamma_t(1)\big)=df_{(1-t)a+tb}(b-a).
$$
En particulier $h$ est différentiable, donc continue ([[ch05-differentiable-implique-continue]]), en tout point de $[0;1]$ : sa restriction à $[0;1]$ est continue sur $[0;1]$ et différentiable sur $]0;1[$.

*La borne.* Pour $t\in\,]0;1[$, par définition de la norme d'opérateur,
$$
\|h'(t)\|_F=\|df_{\gamma(t)}(b-a)\|_F\le\|df_{\gamma(t)}\|\,\|b-a\|_E\le K\,\|b-a\|_E.
$$

*Conclusion.* Le Corollaire V.4.3 ([[ch05-accroissements-finis-borne]]), appliqué à $h$ sur $[0;1]$ avec la constante $k=K\|b-a\|_E$, donne
$$
\|f(b)-f(a)\|_F=\|h(1)-h(0)\|_F\le K\,\|b-a\|_E\,(1-0)=\sup_{t\in[0,1]}\|df_{ta+(1-t)b}\|\times\|b-a\|_E.
$$

*Cas convexe.* Si $U$ est convexe, pour tous $a,b\in U$ le segment $[a,b]$ est contenu dans $U$, et $K\le\sup_{x\in U}\|df_x\|\le k$ : la première partie donne $\|f(b)-f(a)\|_F\le k\|b-a\|_E$. $\square$

## Preuve à trous

Soit $K=\sup_{t\in[0,1]}\|df_{ta+(1-t)b}\|$, supposé fini. On introduit la fonction d'une variable réelle <trou indice="restreindre f au segment">$h(t)=f((1-t)a+tb)$, définie sur un ouvert de $\R$ contenant $[0;1]$ puisque $[a,b]\subset U$</trou>. Par la règle de la chaîne, <trou indice="dérivée du chemin affine : b - a">$h'(t)=df_{(1-t)a+tb}(b-a)$</trou>, et $h$, différentiable, est continue sur $[0;1]$. Par définition de la norme d'opérateur, <trou>$\|h'(t)\|_F\le\|df_{(1-t)a+tb}\|\,\|b-a\|_E\le K\|b-a\|_E$</trou> pour $t\in\,]0;1[$. Le <trou indice="version « borne constante » pour une variable réelle">Corollaire V.4.3 avec $k=K\|b-a\|_E$</trou> donne $\|f(b)-f(a)\|_F=\|h(1)-h(0)\|_F\le K\|b-a\|_E$. Si $U$ est convexe et $\sup_U\|df\|\le k$, alors $[a,b]\subset U$ et $K\le k$. $\square$

## Exemples

* **Une fonction de deux variables.** $f(x,y)=\sin x\cos y$ sur $\R^2$ (euclidien). On a $df_{(x,y)}(h_1,h_2)=\cos x\cos y\,h_1-\sin x\sin y\,h_2$, de norme $\sqrt{\cos^2x\cos^2y+\sin^2x\sin^2y}\le\sqrt{\cos^2y+\sin^2y}=1$. Comme $\R^2$ est convexe : $|\sin x\cos y-\sin x'\cos y'|\le\|(x,y)-(x',y')\|_2$ pour tous points.
* **En dimension infinie.** Soit $E$ un e.v.n., $\mathcal L(E)$ muni de la norme d'opérateur (norme d'algèbre : $\|uv\|\le\|u\|\|v\|$, [[ch05-lef-banach-norme-algebre]]), et $f:\mathcal L(E)\to\mathcal L(E)$, $f(u)=u\circ u=u^2$. C'est la composée de $u\mapsto(u,u)$ et de l'application bilinéaire continue $(u,v)\mapsto uv$, donc ([[ch05-formule-leibniz]]) $df_u(h)=uh+hu$ et $\|df_u\|\le2\|u\|$. Sur la boule ouverte convexe $B(0,r)$, $\|df_u\|\le2r$, donc $\|u^2-v^2\|\le2r\|u-v\|$. (Vérification directe : $u^2-v^2=u(u-v)+(u-v)v$.)
* **Variante utile (Exercice V.6.3).** Si $[a,b]\subset U$ et $c\in U$, appliquer le TAF à $g(x)=f(x)-df_c(x)$, de différentielle $dg_x=df_x-df_c$, donne
$$
\|f(b)-f(a)-df_c(b-a)\|_F\le\sup_{x\in[a,b]}\|df_x-df_c\|\,\|b-a\|_E.
$$
C'est l'estimation clé des preuves d'inversion locale et de [[ch05-c1-ssi-partielles-continues]].

## Pièges

* > ⚠️ **Vérifier que le segment est dans $U$** (ou que $U$ est convexe). Sur un ouvert non convexe, une borne sur $\|df\|$ ne donne pas une constante de Lipschitz globale (exemple de l'argument sur la couronne fendue).
* > ⚠️ **Pas d'égalité** $f(b)-f(a)=df_c(b-a)$ en général : $f(t)=(\cos t,\sin t)$ sur $[0;2\pi]$ donne $f(2\pi)-f(0)=0$ alors que $df_c\neq0$ pour tout $c$. Seule l'inégalité est vraie (l'égalité ne vaut que pour $F=\R$).
* La norme dans le $\sup$ est la **norme d'opérateur** de $df_x\in\mathcal L(E;F)$, pour les normes choisies sur $E$ et $F$ ; changer de norme change la constante.
* Le TAF demande seulement $f$ **différentiable**, pas $C^1$ ; et aucune complétude.
* Pour $f$ de classe $C^1$ sur un ouvert, le TAF donne : $f$ est **localement lipschitzienne** (sur une boule $\bar B(x_0,r)\subset U$ où $\|df\|$ est bornée par continuité). C'est l'argument utilisé pour Cauchy-Lipschitz ([[ch07-cauchy-lipschitz]]) et le point fixe ([[ch06-point-fixe-banach]]).
