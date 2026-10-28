---
id: ch01-liouville
type: theorem
chapter: 1
title: Théorème de Liouville
ref: Théorème I.10.1
page: 26
importance: 3
depends: [ch01-estimees-cauchy, ch01-holomorphe-analytique]
tags: [liouville, bornee, entiere, cauchy]
---
## Intuition

> 💡 Une fonction holomorphe sur tout $\C$ (on dit **entière**) qui ne « monte » pas à l'infini ne peut pas non plus osciller : elle est constante. En variable réelle, $\sin$ est bornée et non constante ; en variable complexe c'est impossible, car $\sin(iy) = i\sinh y$ explose.

La raison profonde : la formule de Cauchy exprime $f^{(k)}(0)$ comme une moyenne de $f$ sur un cercle de rayon $R$, divisée par $R^k$. Si $f$ est bornée, cette moyenne est bornée, et en faisant $R\to+\infty$ toutes les dérivées en $0$ s'annulent : la série de Taylor se réduit à son terme constant.

Rappel : $f$ est **holomorphe** sur l'ouvert $\Omega$ si elle est $\C$-dérivable en tout point avec $f'$ continue ([[ch01-def-holomorphe]]) ; une fonction holomorphe sur $\C$ tout entier est dite **entière**.

## Énoncé

**Théorème (poly, Théorème I.10.1, p. 26).** Soit $f : \C \to \C$ une fonction holomorphe et bornée. Alors $f$ est constante.

## Hypothèses

### H1 — $f$ est holomorphe sur $\C$ tout entier

**Rôle.** On applique les estimées de Cauchy sur des disques $D(0,R)$ pour **tout** $R>0$ : il faut que $f$ soit holomorphe sur un voisinage de chaque $\bar D(0,R)$, donc sur $\C$.

**Si on la retire.** La fonction $f(z) = \dfrac{1}{z}$ est holomorphe et bornée sur $\{|z|>1\}$ (par $1$), non constante. Et $f(z)=z$ est holomorphe bornée non constante sur $D(0,1)$ : être borné sur un ouvert strict de $\C$ ne force rien.

### H2 — $f$ est bornée

**Rôle.** C'est ce qui permet de majorer $|f^{(k)}(0)| \le k!\,M/R^k$ par une quantité qui tend vers $0$ quand $R\to+\infty$ pour $k\ge 1$.

**Si on la retire.** $f(z)=z$, $f(z) = e^z$ : entières, non constantes. Noter que $e^z$ est bornée sur tout demi-plan $\Re(z)\le a$ mais pas sur $\C$.

## Idée de la preuve

Estimées de Cauchy sur $\bar D(0,R)$ : $|f^{(k)}(0)|\le k!\,M R^{-k}$. On fait $R\to\infty$ : $f^{(k)}(0)=0$ pour $k\ge1$. Comme $f$ est analytique sur $\C$, $f(z)=\sum_k f^{(k)}(0)z^k/k! = f(0)$.

## Preuve

Soit $M = \sup_{\C}|f| < +\infty$. Fixons $R>0$. La fonction $f$ est holomorphe sur un ouvert contenant le disque fermé $\bar D(0,R)$, donc les estimées de Cauchy ([[ch01-estimees-cauchy]]) donnent, pour tout entier $k\ge 0$,
$$
|f^{(k)}(0)| \le \frac{k!}{R^k}\,\sup_{C(0,R)}|f| \le \frac{k!\,M}{R^k}.
$$
Pour $k\ge 1$, le membre de droite tend vers $0$ lorsque $R\to+\infty$, tandis que le membre de gauche ne dépend pas de $R$ : donc $f^{(k)}(0)=0$ pour tout $k\ge1$.

Or $f$, holomorphe sur $\C$, est analytique sur $\C$ ([[ch01-holomorphe-analytique]]) : pour tout $z\in\C$, $f(z) = \sum_{k\ge0} \dfrac{f^{(k)}(0)}{k!}\,z^k$, la série ayant un rayon de convergence infini (le disque $D(0,R)$ est contenu dans $\C$ pour tout $R$). Tous les coefficients d'indice $k\ge1$ sont nuls, donc $f(z)=f(0)$ pour tout $z$ : $f$ est constante. $\square$

*Variante du poly :* on peut aussi raisonner avec $k=1$ seulement, en un point $z_0$ quelconque : $|f'(z_0)|\le M/R \to 0$, donc $f'\equiv 0$ sur $\C$, et $\C$ étant connexe, $f$ est constante.

## Preuve à trous

Soit $M=\sup_\C |f|$. Pour $R>0$ et $k\ge0$, les <trou indice="quel résultat majore les dérivées en un point par le sup sur un cercle ?">estimées de Cauchy sur $\bar D(0,R)$</trou> donnent
$$
|f^{(k)}(0)| \le \frac{k!}{R^k}\sup_{C(0,R)}|f| \le \frac{k!\,M}{R^k}.
$$
Pour $k\ge1$, on fait <trou>$R\to+\infty$ : le majorant tend vers $0$ alors que $|f^{(k)}(0)|$ n'en dépend pas, donc $f^{(k)}(0)=0$</trou>. Enfin $f$ est <trou indice="holomorphe sur C entraîne...">analytique sur $\C$, donc égale à sa série de Taylor en $0$, de rayon infini</trou>, dont seul le terme constant subsiste : $f\equiv f(0)$. $\square$

## Exemples

* **D'Alembert–Gauss.** Si $P$ est un polynôme non constant sans racine, $1/P$ est entière et tend vers $0$ à l'infini, donc bornée, donc constante : absurde. Voir [[ch01-dalembert-gauss]].
* **Fonctions entières à croissance polynomiale.** Si $|f(z)|\le a+b|z|^m$ sur $\C$, le même argument donne $f^{(k)}(0)=0$ pour $k>m$ : $f$ est un polynôme de degré $\le m$.
* **Une fonction entière évite au plus un point.** (Picard, hors programme) Mais une conséquence facile de Liouville : si $f$ entière évite un disque $D(a,r)$, alors $1/(f-a)$ est entière bornée par $1/r$, donc $f$ est constante. L'image d'une fonction entière non constante est **dense** dans $\C$.

## Pièges

* > ⚠️ « bornée » doit être vérifié sur **tout** $\C$, pas sur un disque ni un demi-plan.
* Ne pas confondre avec le principe du maximum ([[ch01-principe-maximum]]), qui concerne un ouvert borné et parle du **sup sur le bord**.
* La version « $f$ entière et $\Re(f)$ bornée » se traite en composant avec $\exp$ : $e^{f}$ est entière et $|e^f| = e^{\Re f}$ est bornée, donc $e^f$ constante, donc $f'=0$.
