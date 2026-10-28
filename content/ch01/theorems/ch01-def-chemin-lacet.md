---
id: ch01-def-chemin-lacet
type: definition
chapter: 1
title: "Chemin (orienté), lacet, chemin opposé $\gamma^{opp}$"
ref: Définition I.5.1
page: 15
importance: 2
depends: []
tags: [chemin, lacet, chemin-oppose, c1-par-morceaux, integrale-curviligne]
---
## Intuition

> 💡 Un **chemin**, c'est le trajet d'un point mobile dans le plan complexe : à chaque instant $t$ d'un intervalle de temps $[a,b]$, on associe la position $\gamma(t)\in\C$. On autorise quelques « virages en épingle » (coins), mais entre deux coins le mouvement est régulier, avec une vitesse $\gamma'(t)$ bien définie.

Un chemin n'est donc **pas** un dessin (une partie du plan) : c'est un dessin **avec un mode de parcours** (un sens, une vitesse). Un **lacet** est un trajet qui revient à son point de départ. Le **chemin opposé** est le même trajet parcouru à l'envers, comme un film passé en marche arrière.

Ces objets servent à définir l'intégrale $\int_\gamma f(z)\,dz$ ([[ch01-def-integrale-chemin]]), qui est l'outil central de toute l'analyse complexe (formule de Cauchy, résidus). Rappel : un **ouvert** $\Omega$ de $\C$ est une partie telle que pour tout $z\in\Omega$ il existe $r>0$ avec $D(z,r)=\{w : |w-z|<r\}\subset\Omega$.

## Énoncé

**Définition (poly, Définition I.5.1, p. 15).** Soit $\Omega$ un ouvert non vide de $\C$. Un **chemin** $\gamma$ (orienté) de $\Omega$ est une application continue de classe $C^1$ par morceaux
$$
\gamma : [a,b]\longrightarrow\Omega,
$$
où $a<b$. Si de plus $\gamma(a)=\gamma(b)$, on dira que $\gamma$ est un **lacet**. Le **chemin opposé** $\gamma^{opp}:[a,b]\to\Omega$ est défini par
$$
\gamma^{opp}(t):=\gamma(a+b-t).
$$

**Convention « $C^1$ par morceaux » (poly, Remarque I.5.2, p. 15).** Cela signifie qu'il existe une subdivision $a=t_0<t_1<\dots<t_n=b$ telle que, sur chaque intervalle ouvert $]t_{k-1},t_k[$, $\gamma$ est de classe $C^1$, et que la dérivée $\gamma'$ admet des limites à gauche et à droite en chacun des points $t_k$ (là où elle peut être discontinue). En particulier $\gamma'$, définie sauf en un nombre fini de points, **reste bornée** sur $[a,b]$ : voir [[ch01-chemin-c1-par-morceaux-derivee-bornee]].

Vocabulaire : $\gamma(a)$ est l'**origine** du chemin, $\gamma(b)$ son **extrémité**, et l'**image** (ou support) de $\gamma$ est la partie $\gamma([a,b])\subset\Omega$. Ici $\gamma'(t)=\frac{d}{dt}\bigl(\Re\gamma(t)\bigr)+i\,\frac{d}{dt}\bigl(\Im\gamma(t)\bigr)$ est la dérivée usuelle d'une fonction d'une variable réelle à valeurs dans $\C\simeq\R^2$ (le « vecteur vitesse »).

## Hypothèses

### H1 — $\Omega$ ouvert et $\gamma$ à valeurs dans $\Omega$

**Rôle.** On intégrera le long de $\gamma$ des fonctions $f$ définies (continues, holomorphes) sur $\Omega$ : il faut que **toute** l'image de $\gamma$ soit dans le domaine de $f$. Par exemple, le cercle unité parcouru par $t\mapsto e^{it}$ est un lacet de $\C^\times=\C\setminus\{0\}$, mais le cercle $t\mapsto 1+e^{it}$, qui passe par $0$ (en $t=\pi$), n'est **pas** un chemin de $\C^\times$.

### H2 — $a<b$

**Rôle.** Le paramètre « temps » parcourt un vrai intervalle, orienté de $a$ vers $b$ : c'est ce qui donne au chemin son **orientation** (son sens de parcours).

### H3 — continuité globale + $C^1$ par morceaux

**Rôle.** La continuité interdit les « sauts » (téléportations) ; le caractère $C^1$ par morceaux avec limites de $\gamma'$ à gauche et à droite garantit que $\gamma'$ est bornée et continue par morceaux, donc que $\int_a^b f(\gamma(t))\gamma'(t)\,dt$ a un sens ([[ch01-def-integrale-chemin]]) et que la longueur $\int_a^b|\gamma'(t)|\,dt$ est finie ([[ch01-longueur-majoration-integrale]]).

**Si on la retire.** Une courbe seulement continue (par exemple une courbe de Peano, qui remplit un carré) n'a pas de vitesse $\gamma'$ : la formule définissant $\int_\gamma f(z)\,dz$ n'a plus de sens. Exemple plus modeste : $\gamma(t)=t+i\sqrt t$ sur $[0,1]$ est continue, $C^1$ sur $]0,1]$, mais $\gamma'(t)=1+\frac{i}{2\sqrt t}$ n'a pas de limite (finie) en $0^+$ : ce n'est **pas** un chemin au sens du poly. Pourtant son image (l'arc de parabole $x=y^2$, $0\le y\le1$) est l'image du vrai chemin $s\mapsto s^2+is$, $s\in[0,1]$, de vitesse $2s+i$ bornée : être un chemin est une propriété **du paramétrage**, pas de l'image.

## Exemples

* **Segment.** Pour $z_1,z_2\in\C$, le chemin $\gamma(t)=z_1+t(z_2-z_1)$, $t\in[0,1]$, parcourt le segment $[z_1,z_2]$ de $z_1$ vers $z_2$ à vitesse constante $\gamma'(t)=z_2-z_1$. Son opposé est $\gamma^{opp}(t)=\gamma(1-t)=z_2+t(z_1-z_2)$ : le segment de $z_2$ vers $z_1$. C'est un chemin de tout ouvert $\Omega$ contenant le segment.
* **Cercle.** $\gamma(t)=z_0+re^{it}$, $t\in[0,2\pi]$ ($r>0$), est un lacet ($\gamma(0)=\gamma(2\pi)=z_0+r$), de classe $C^1$, qui parcourt le cercle $C(z_0,r)$ dans le sens direct ([[ch01-cercle-sens-direct]]). Son opposé $\gamma^{opp}(t)=z_0+re^{i(2\pi-t)}=z_0+re^{-it}$ parcourt le même cercle dans le sens indirect (horaire).
* **Chemin avec un coin.** $\gamma(t)=t+i|t|$, $t\in[-1,1]$ : continu, $C^1$ sur $]-1,0[$ (vitesse $1-i$) et sur $]0,1[$ (vitesse $1+i$), avec des limites à gauche et à droite en $0$ : c'est un chemin (en forme de « V ») de $-1+i$ à $1+i$, mais pas un chemin de classe $C^1$. Le bord d'un triangle ou d'un carré, parcouru segment par segment, est de même un lacet $C^1$ par morceaux (voir [[ch01-def-chemins-composables]]).

## Pièges

* > ⚠️ Un chemin est une **application** $\gamma:[a,b]\to\Omega$, pas une partie du plan. Deux chemins de même image peuvent donner des intégrales différentes (sens opposés, ou cercle parcouru deux fois : $t\mapsto e^{it}$ sur $[0,4\pi]$).
* « Lacet » ne veut pas dire « courbe simple » : un lacet peut se recouper (un huit, un cercle parcouru plusieurs fois). La seule condition est $\gamma(a)=\gamma(b)$.
* Le chemin opposé est défini sur **le même intervalle** $[a,b]$ (et non sur $[-b,-a]$) : $\gamma^{opp}(a)=\gamma(b)$ et $\gamma^{opp}(b)=\gamma(a)$.
* On n'exige pas $\gamma'(t)\neq0$ : un chemin peut s'arrêter (vitesse nulle) ou même être constant ; ce n'est pas gênant pour l'intégration.
* Vérifier que l'image du chemin est contenue dans l'ouvert où vit la fonction que l'on intègre (H1) : c'est l'erreur la plus fréquente dans les applications des théorèmes de Cauchy et des résidus.
