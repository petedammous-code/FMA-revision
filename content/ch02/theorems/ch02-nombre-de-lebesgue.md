---
id: ch02-nombre-de-lebesgue
type: proposition
chapter: 2
title: Nombre de Lebesgue d'un recouvrement ouvert d'un compact
ref: Proposition II.2.4
page: 40
importance: 1
depends: []
tags: [compacite, recouvrement, lebesgue, topologie, bolzano-weierstrass]
---
## Intuition

> 💡 Quand un compact $K$ est recouvert par des ouverts, on dispose d'une **marge uniforme** $\delta>0$ : toute boule de rayon $\delta$ centrée en un point de $K$ tient tout entière dans **un seul** des ouverts du recouvrement. Autrement dit, « localement, on est dans un $U_i$ » devient « à l'échelle $\delta$, on est dans un $U_i$ », avec le **même** $\delta$ partout sur $K$.

Image mentale : les $U_i$ sont des dalles qui se chevauchent et recouvrent une plaque $K$ ; le nombre de Lebesgue est le diamètre d'une pièce de monnaie que l'on peut poser n'importe où sur $K$ sans qu'elle chevauche jamais deux dalles seulement « au bord ». Sans compacité, les dalles peuvent devenir de plus en plus fines et aucune pièce ne convient.

C'est l'argument de compacité qui permet, dans la preuve du théorème d'invariance par homotopie ([[ch02-invariance-homotopie-integrale]]), de choisir un pas de grillage $1/n$ tel que chaque petit carré soit envoyé dans un disque où $f$ a une primitive.

Notations : $\bar B(k,\delta)=\{x\in\R^N : \|x-k\|\le\delta\}$ est la boule fermée ; un **compact** de $\R^N$ est une partie fermée et bornée, ou de manière équivalente une partie dont toute suite admet une sous-suite convergente dans $K$ (Bolzano–Weierstrass).

## Énoncé

**Proposition (poly, Proposition II.2.4, p. 40).** Soit $K$ un compact de $\R^N$, et soit $K\subset\bigcup_{i\in I}U_i$ un recouvrement de $K$ par des ouverts $U_i$. Alors il existe $\delta>0$ ayant la propriété suivante : pour tout $k\in K$, il existe $i\in I$ tel que
$$
\bar B(k,\delta)\subset U_i .
$$

**Définition (poly, p. 40).** On appelle un nombre $\delta$ vérifiant la propriété de la proposition un **nombre de Lebesgue** du recouvrement $\bigcup_{i\in I}U_i$.

## Hypothèses

### H1 — $K$ est compact

**Rôle.** Dans la preuve par l'absurde, on extrait d'une suite $(k_n)$ de « mauvais points » une sous-suite convergente vers un point $k\in K$ ; c'est là que la compacité (Bolzano–Weierstrass) intervient, et c'est elle qui transforme l'information locale en $k$ en une contradiction uniforme.

**Si on la retire.** $K=\,]0,1[$ (borné, non fermé) recouvert par les ouverts $U_n=\,]1/n,1[$, $n\ge2$. Pour tout $\delta>0$, le point $k=\tfrac12\min(\delta,1)\in K$ vérifie $\bar B(k,\delta)=[k-\delta,k+\delta]\ni k-\delta\le0$, qui n'est dans aucun $U_n\subset\,]0,1[$ : aucun $\delta$ ne convient. Exemple fermé non borné : $K=\R$ recouvert par $U_m=\,]m-2^{-|m|},\,m+1+2^{-|m|}[$, $m\in\Z$ ; au point $k=m$, $\bar B(m,\delta)=[m-\delta,m+\delta]$ n'est contenu que dans $U_m$ ou $U_{m-1}$ (les autres $U_p$ ne contiennent pas $m$), ce qui impose $\delta<2^{-|m|}$ ou $\delta<2^{-|m-1|}$, impossible pour tout $m$ avec un $\delta$ fixé.

### H2 — les $U_i$ sont ouverts

**Rôle.** On utilise qu'autour de la limite $k$, il existe $\eps>0$ avec $\bar B(k,\eps)\subset U_i$ : c'est la définition d'un ouvert. Sans cela, le point limite n'a aucune marge.

**Si on la retire.** $K=[0,1]$ recouvert par $U_1=[0,\tfrac12]$ et $U_2=\,]\tfrac12,1]$ (non ouverts). Pour tout $\delta>0$, $\bar B(\tfrac12,\delta)$ contient des points $>\tfrac12$ (pas dans $U_1$) et le point $\tfrac12$ (pas dans $U_2$) : aucun nombre de Lebesgue.

## Idée de la preuve

Par l'absurde : pour chaque $n$, un point $k_n\in K$ dont la boule de rayon $1/n$ ne tient dans aucun $U_i$. Par compacité $k_n\to k\in K$ (sous-suite). Or $k\in U_i$ ouvert : une boule $\bar B(k,\eps)\subset U_i$, et pour $n$ grand $\bar B(k_n,\eps/3)\subset\bar B(k,\eps)$ (inégalité triangulaire), contredisant $1/n<\eps/3$.

## Preuve

Pour tout $n\in\N^\times$, soit $F_n$ l'ensemble des $k\in K$ tels qu'il n'existe pas de $i\in I$ vérifiant $\bar B(k,\tfrac1n)\subset U_i$.

Supposons la conclusion fausse. Alors pour tout $n\in\N^\times$, $\delta=\tfrac1n$ ne convient pas, c'est-à-dire que $F_n$ est non vide. Choisissons une suite $(k_n)_{n\in\N^\times}$ de points de $K$ avec $k_n\in F_n$ pour tout $n$. Comme $K$ est compact, cette suite admet une valeur d'adhérence dans $K$ ; quitte à extraire une sous-suite (ce qui ne change pas la propriété $k_n\in F_n$, car on garde l'indice $n$ attaché à chaque terme), on peut supposer que $(k_n)$ converge vers un point $k\in K$.

Comme $K\subset\bigcup_i U_i$, il existe $i\in I$ tel que $k\in U_i$. Comme $U_i$ est ouvert, il existe $\eps>0$ tel que $\bar B(k,\eps)\subset U_i$. Par convergence, il existe $n_0\in\N^\times$ tel que pour tout $n\ge n_0$, $k_n\in\bar B(k,\eps/3)$. Pour un tel $n$ et pour $x\in\bar B(k_n,\eps/3)$, l'inégalité triangulaire donne $\|x-k\|\le\|x-k_n\|+\|k_n-k\|\le\tfrac{2\eps}3\le\eps$ ; donc
$$
\bar B(k_n,\eps/3)\subset\bar B(k,\eps)\subset U_i \qquad (n\ge n_0).
$$
Or $k_n\in F_n$ : la boule $\bar B(k_n,\tfrac1n)$ n'est contenue dans aucun $U_j$, en particulier pas dans $U_i$. Comme $\bar B(k_n,\eps/3)\subset U_i$, on a nécessairement $\bar B(k_n,\tfrac1n)\not\subset\bar B(k_n,\eps/3)$, c'est-à-dire $\tfrac1n>\eps/3$. Ceci devant être vrai pour tout $n\ge n_0$, on obtient une contradiction dès que $n>3/\eps$. $\square$

## Preuve à trous

Pour $n\in\N^\times$, soit $F_n$ l'ensemble des $k\in K$ tels qu'aucun $U_i$ ne contienne $\bar B(k,\tfrac1n)$. Si la conclusion est fausse, <trou indice="que signifie « $\delta=1/n$ ne convient pas » ?">$F_n\ne\varnothing$ pour tout $n$, et l'on choisit $k_n\in F_n$</trou>. Par <trou indice="l'hypothèse sur $K$">compacité de $K$, quitte à extraire, $k_n\to k\in K$</trou>. Soit $i$ avec $k\in U_i$ et, $U_i$ étant ouvert, $\eps>0$ avec $\bar B(k,\eps)\subset U_i$. Pour $n\ge n_0$, $k_n\in\bar B(k,\eps/3)$, donc par l'inégalité triangulaire <trou indice="une boule centrée en $k_n$ contenue dans $U_i$">$\bar B(k_n,\eps/3)\subset\bar B(k,\eps)\subset U_i$</trou>. Mais $k_n\in F_n$ impose que $\bar B(k_n,\tfrac1n)\not\subset U_i$, d'où <trou>$\tfrac1n>\eps/3$ pour tout $n\ge n_0$, absurde pour $n>3/\eps$</trou>. $\square$

## Exemples

1. **Un calcul explicite.** $K=[0,1]$, $U_1=\,]-1,\,0{,}6[$, $U_2=\,]0{,}4,\,2[$. Pour $k\le\tfrac12$, $[k-\delta,k+\delta]\subset U_1$ dès que $k+\delta<0{,}6$, assuré si $\delta<0{,}1$ ; pour $k\ge\tfrac12$, $[k-\delta,k+\delta]\subset U_2$ dès que $k-\delta>0{,}4$, assuré si $\delta<0{,}1$. Donc tout $\delta<0{,}1$ est un nombre de Lebesgue. En revanche $\delta=0{,}1$ n'en est pas un : $\bar B(\tfrac12,0{,}1)=[0{,}4,\,0{,}6]$ n'est contenu ni dans $U_1$ (il contient $0{,}6$) ni dans $U_2$ (il contient $0{,}4$). Un nombre de Lebesgue n'est pas unique : tout $\delta'\in\,]0,\delta]$ en est un aussi.

2. **Usage dans le théorème d'invariance par homotopie.** Si $\gamma:[0,1]^2\to\Omega$ est continue et $f\in\Hol(\Omega)$, on recouvre le compact $\gamma([0,1]^2)$ par des disques ouverts $D_\alpha\subset\Omega$ (sur chacun, $f$ a une primitive, [[ch01-primitive-locale]]). Un nombre de Lebesgue $\delta$ et la continuité uniforme de $\gamma$ (théorème de Heine) donnent un pas $1/n$ tel que l'image de chaque petit carré de côté $1/n$ est contenue dans un disque $D(x,\delta)\subset D_\alpha$ : voir [[ch02-invariance-homotopie-integrale]].

3. **Recouvrement du cercle.** $K=C(0,1)\subset\R^2$ recouvert par les deux demi-plans ouverts $U_1=\{(x,y):x>-\tfrac12\}$ et $U_2=\{(x,y):x<\tfrac12\}$. Un point $k=(\cos\theta,\sin\theta)$ avec $\cos\theta\ge0$ vérifie $\bar B(k,\delta)\subset U_1$ dès que $\delta<\tfrac12$ (les abscisses des points de la boule sont $\ge\cos\theta-\delta\ge-\delta>-\tfrac12$), et symétriquement $\bar B(k,\delta)\subset U_2$ si $\cos\theta\le0$ : $\delta=\tfrac14$ est un nombre de Lebesgue.

## Pièges

* > ⚠️ La propriété est « **pour tout** $k$, **il existe** $i$ » : l'indice $i$ dépend du point $k$, seul $\delta$ est uniforme. Il ne s'agit pas de trouver un ouvert contenant toutes les boules.
* L'hypothèse de compacité est indispensable (H1) : « fermé » ou « borné » seuls ne suffisent pas.
* Dans la preuve, l'extraction d'une sous-suite ne doit pas faire perdre le lien entre le point $k_n$ et le rayon $1/n$ : on extrait des indices, et le $k_n$ gardé appartient toujours à $F_n$.
* Le choix de $\eps/3$ (et non $\eps/2$ ou $\eps$) est seulement une commodité pour l'inégalité triangulaire ; toute fraction $<\eps/2$ convient.
* Ne pas confondre avec la propriété de Borel–Lebesgue (extraction d'un sous-recouvrement fini) : ici on n'extrait rien, on obtient une échelle uniforme. Les deux sont des conséquences de la compacité.
