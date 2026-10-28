---
id: ch09-immersion-submersion-def
type: definition
chapter: 9
title: Immersion, submersion
ref: Définition IX.1.1
page: 147
importance: 3
depends: [ch05-differentielle-def]
tags: [immersion, submersion, differentielle, injective, surjective, rang]
---
## Intuition

> 💡 Près d'un point $a$, une application différentiable $f$ « ressemble » à sa différentielle $df_a$, qui est **linéaire** ([[ch05-differentielle-def]]). On classe donc les points selon ce que fait cette application linéaire : si $df_a$ est **injective**, $f$ ne « écrase » aucune direction en $a$ (une courbe ou une nappe paramétrée sans pli ni pointe : c'est une **immersion**) ; si $df_a$ est **surjective**, $f$ « remplit » toutes les directions de l'espace d'arrivée (penser à une projection $\R^3\to\R^2$ : c'est une **submersion**).

Les immersions servent à **paramétrer** les sous-variétés (condition 3 de [[ch09-sous-variete-def]]) ; les submersions servent à les définir par des **équations** ([[ch09-sous-variete-equation-valeur-reguliere]]).

Rappels : $df_a\in\mathcal L(\R^p,\R^q)$ est l'unique application linéaire telle que $f(a+h)=f(a)+df_a(h)+o(h)$ ([[ch05-differentielle-def]]) ; sa matrice dans les bases canoniques est la **matrice jacobienne** $J_f(a)=\big(\frac{\partial f_i}{\partial x_j}(a)\big)$, de taille $q\times p$ ([[ch05-matrice-jacobienne]]). Le **rang** de $df_a$ est la dimension de son image $df_a(\R^p)$.

## Énoncé

**Définition (poly, Définition IX.1.1, p. 147).** Soit $f : U\to\R^q$ une application différentiable définie sur un ouvert $U$ de $\R^p$. On dit que $f$ est une **immersion** (resp. une **submersion**) en $a\in U$ si $df_a$ est injective (resp. surjective) de $\R^p$ dans $\R^q$. On dit que $f$ est une **immersion** (resp. une **submersion**) si c'est une immersion (resp. une submersion) en tout point de $U$.

Traductions utiles (algèbre linéaire, théorème du rang $\dim\ker df_a+\operatorname{rg} df_a=p$) :

| | condition sur $df_a$ | sur la jacobienne $J_f(a)$ ($q\times p$) | nécessite |
|---|---|---|---|
| immersion en $a$ | $\ker df_a=\{0\}$ | rang $=p$ (colonnes libres) | $p\le q$ |
| submersion en $a$ | $df_a(\R^p)=\R^q$ | rang $=q$ (lignes libres) | $p\ge q$ |

## Hypothèses

### H1 — $U$ ouvert, $f$ différentiable

**Rôle.** La notion porte sur $df_a$, qui n'a de sens (et n'est unique) qu'en un point intérieur où $f$ est différentiable. Dans tous les résultats qui suivent ([[ch09-immersion-locale-homeo]], [[ch09-rang-constant-rappel]]), on supposera en plus $f$ de classe $C^1$ : c'est ce qui permet de passer d'une information **en un point** à une information **au voisinage** de ce point.

**Si on la retire.** Avec seulement « différentiable », être une immersion en $a$ ne dit rien des points voisins : $f(t)=t+2t^2\sin(1/t)$, $f(0)=0$, est dérivable sur $\R$ avec $f'(0)=1$ (immersion en $0$), mais $f'(t)=1+4t\sin(1/t)-2\cos(1/t)$ vaut $-1$ en $t=\frac{1}{2\pi n}$ et $3$ en $t=\frac1{(2n+1)\pi}$, donc s'annule (valeurs intermédiaires sur $]0,+\infty[$ où $f'$ est continue) en des points arbitrairement proches de $0$ : $f$ n'est une immersion sur aucun voisinage de $0$.

### H2 — contraintes de dimension cachées

**Rôle.** Une application linéaire injective $\R^p\to\R^q$ impose $p\le q$ ; une surjective impose $p\ge q$. Si $p=q$, les deux notions coïncident : $df_a$ est un isomorphisme.

**Si on la retire.** Il n'y a pas d'immersion $\R^3\to\R^2$ ni de submersion $\R\to\R^2$ : il est inutile de chercher.

## Exemples

* **Courbe paramétrée** ($p=1$). Pour $f:I\to\R^q$, $df_t(h)=h\,f'(t)$, donc $f$ est une immersion en $t$ si et seulement si $f'(t)\neq0$ (vitesse non nulle). Ex. : $f(t)=(\cos t,\sin t)$ a $f'(t)=(-\sin t,\cos t)\neq0$ : immersion de $\R$ dans $\R^2$, **non injective** ($f(t+2\pi)=f(t)$). Au contraire $g(t)=(t^2,t^3)$ a $g'(0)=(0,0)$ : $g$ n'est pas une immersion en $0$ (point de rebroussement).
* **Fonction numérique** ($q=1$). Pour $f:U\to\R$, $df_a(h)=\langle\nabla f(a),h\rangle$ est surjective sur $\R$ si et seulement si elle est non nulle, c'est-à-dire $\nabla f(a)\neq0$. Ex. : $f(x,y,z)=x^2+y^2+z^2$ a $\nabla f=2(x,y,z)$ : submersion sur $\R^3\setminus\{0\}$, pas en $0$.
* **Nappe paramétrée** $\R^2\to\R^3$. $f(u,v)=(u,v,u^2+v^2)$ : $J_f(u,v)=\begin{pmatrix}1&0\\0&1\\2u&2v\end{pmatrix}$, dont les deux premières lignes forment $I_2$ : rang $2$, $f$ est une immersion en tout point (de plus injective, c'est le paramétrage du paraboloïde). La projection $\pi(x,y,z)=(x,y)$ est une submersion de $\R^3$ sur $\R^2$, et $\pi\circ f=\mathrm{id}_{\R^2}$.

## Pièges

* > ⚠️ Immersion $\neq$ injective. « Immersion » est une propriété **infinitésimale** ($df_a$ injective), pas une propriété globale de $f$ : $t\mapsto(\cos t,\sin t)$ est une immersion non injective ; $t\mapsto(t^3-4t,t^2-4)$ est une immersion avec $f(2)=f(-2)=(0,0)$ ([[ch09-contre-ex-point-multiple]]). Inversement $t\mapsto t^3$ est injective sans être une immersion en $0$.
* > ⚠️ Submersion $\neq$ surjective. $f(x,y)=e^x$ ($\R^2\to\R$) est une submersion ($\partial_x f=e^x\neq0$) mais n'atteint pas les réels $\le0$ ; $f(x)=x^3$ est surjective de $\R$ sur $\R$ sans être une submersion en $0$.
* Ne pas inverser : **im**mersion $\leftrightarrow$ **in**jective ; **sub**mersion $\leftrightarrow$ **sur**jective. Moyen mnémotechnique : une immersion « plonge » (immerge) un petit espace dans un grand ($p\le q$) ; une submersion « écrase » un grand espace sur un petit ($p\ge q$).
* Même mot, autre contexte : immersion/submersion **entre sous-variétés** ([[ch09-immersion-submersion-sous-varietes-def]]) se définit avec $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ ; c'est la même idée lue dans les espaces tangents.
