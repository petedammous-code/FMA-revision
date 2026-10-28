---
id: ch01-def-chemins-composables
type: definition
chapter: 1
title: "Chemins composables, chemin composé $\gamma_1\vee\gamma_2$"
ref: "non numéroté, section I.5, p. 15"
page: 15
importance: 1
depends: [ch01-def-chemin-lacet]
tags: [chemin, concatenation, chemin-compose, lacet]
---
## Intuition

> 💡 Mettre deux trajets **bout à bout** : on parcourt d'abord $\gamma_1$, puis, arrivé à son extrémité, on enchaîne sur $\gamma_2$. Pour que ce soit possible sans « téléportation », il faut que $\gamma_2$ parte exactement de là où $\gamma_1$ arrive : c'est la condition de **composabilité**.

Techniquement, il faut aussi recoller les intervalles de temps : on garde le temps de $\gamma_1$ sur $[a_1,b_1]$, puis on **décale** le temps de $\gamma_2$ pour qu'il commence à l'instant $b_1$. C'est ainsi qu'on fabrique le bord d'un triangle, d'un carré, d'un « trou de serrure » (contours du chapitre II) à partir de segments et d'arcs de cercle. Les notions de chemin et de lacet sont dans [[ch01-def-chemin-lacet]].

## Énoncé

**Définition (poly, section I.5, p. 15).** Soit $\Omega$ un ouvert de $\C$. On dit que deux chemins $\gamma_1:[a_1,b_1]\to\Omega$ et $\gamma_2:[a_2,b_2]\to\Omega$ sont **composables** si $\gamma_1(b_1)=\gamma_2(a_2)$. Auquel cas, on peut définir le **chemin composé**
$$
\gamma_1\vee\gamma_2:[a_1,\,b_1+b_2-a_2]\to\Omega
$$
par
$$
\gamma_1\vee\gamma_2(t):=\begin{cases}\gamma_1(t)&\text{si } t\in[a_1,b_1],\\ \gamma_2(t+a_2-b_1)&\text{si } t\in[b_1,\,b_1+b_2-a_2].\end{cases}
$$

Le poly ne le dit pas explicitement, mais c'est immédiat : $\gamma_1\vee\gamma_2$ **est un chemin** de $\Omega$, d'origine $\gamma_1(a_1)$ et d'extrémité $\gamma_2(b_2)$, défini sur un intervalle de longueur $(b_1-a_1)+(b_2-a_2)$. En effet : les deux formules coïncident en $t=b_1$ (elles donnent $\gamma_1(b_1)$ et $\gamma_2(a_2)$, égaux par composabilité), donc $\gamma_1\vee\gamma_2$ est bien définie et continue (recollement de deux fonctions continues sur deux fermés qui se coupent en $\{b_1\}$) ; et si $(t_k)$ et $(s_j)$ sont des subdivisions adaptées à $\gamma_1$ et $\gamma_2$, les points $t_k$ et $s_j+b_1-a_2$ forment une subdivision adaptée à $\gamma_1\vee\gamma_2$, qui est donc $C^1$ par morceaux.

## Hypothèses

### H1 — $\gamma_1(b_1)=\gamma_2(a_2)$ (composabilité)

**Rôle.** Elle assure que les deux formules donnent la même valeur en $t=b_1$, donc que $\gamma_1\vee\gamma_2$ est bien définie et **continue**.

**Si on la retire.** Avec $\gamma_1(t)=t$ et $\gamma_2(t)=i+t$ sur $[0,1]$ : $\gamma_1(1)=1\ne i=\gamma_2(0)$. La formule donnerait $1$ et $i$ en $t=1$ ; si l'on choisit l'une des deux valeurs, la fonction obtenue a un saut en $t=1$ : ce n'est pas un chemin. (On peut toujours considérer la **somme** $\int_{\gamma_1}+\int_{\gamma_2}$ de deux intégrales, mais ce n'est l'intégrale sur aucun chemin.)

### H2 — l'ordre compte

**Rôle.** $\gamma_1\vee\gamma_2$ suppose que l'extrémité de $\gamma_1$ est l'origine de $\gamma_2$. Le composé $\gamma_2\vee\gamma_1$ n'est défini que si $\gamma_2(b_2)=\gamma_1(a_1)$ : la composition n'est pas commutative (et les deux composés, quand ils existent, sont des chemins différents).

## Exemples

* **Un chemin en « L ».** $\gamma_1(t)=t$ sur $[0,1]$ (de $0$ à $1$) et $\gamma_2(t)=1+it$ sur $[0,1]$ (de $1$ à $1+i$) sont composables ; ici $a_2=0$, $b_1=1$, donc
$$
\gamma_1\vee\gamma_2:[0,2]\to\C,\qquad \gamma_1\vee\gamma_2(t)=\begin{cases} t & t\in[0,1],\\ 1+i(t-1) & t\in[1,2].\end{cases}
$$
* **Bord d'un triangle.** Avec $[z,w]$ désignant le segment $t\mapsto z+t(w-z)$, $t\in[0,1]$, le lacet $[0,1]\vee[1,1+i]\vee[1+i,0]$ parcourt le bord du triangle de sommets $0,1,1+i$ dans le sens direct. Le composé est **associatif** : on vérifie sur la formule que $(\gamma_1\vee\gamma_2)\vee\gamma_3$ et $\gamma_1\vee(\gamma_2\vee\gamma_3)$ sont la même application, définie sur $[a_1,\,b_1+(b_2-a_2)+(b_3-a_3)]$ ; les parenthèses sont donc inutiles.
* **Aller-retour.** Pour tout chemin $\gamma:[a,b]\to\Omega$, $\gamma$ et $\gamma^{opp}$ sont composables ($\gamma(b)=\gamma^{opp}(a)$), et $\gamma\vee\gamma^{opp}$, défini sur $[a,2b-a]$, est un lacet : on va de $\gamma(a)$ à $\gamma(b)$ puis on revient. Par [[ch01-integrale-reparametrage-oppose-concatenation]], toute intégrale sur ce lacet est nulle.

## Pièges

* L'intervalle de définition de $\gamma_1\vee\gamma_2$ est $[a_1,b_1+b_2-a_2]$, pas $[a_1,b_2]$ : le temps de $\gamma_2$ est **décalé** de $b_1-a_2$.
* Le composé d'un chemin $C^1$ avec un autre chemin $C^1$ n'est en général que $C^1$ **par morceaux** (coin au point de raccord) : c'est une des raisons pour lesquelles on travaille avec des chemins $C^1$ par morceaux.
* Le symbole $\vee$ n'a rien à voir avec la composition d'applications $\circ$ : $\gamma_1\vee\gamma_2$ est une **juxtaposition** dans le temps, pas $\gamma_1\circ\gamma_2$.
